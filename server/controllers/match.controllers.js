import { Field } from '../models/field.model.js'
import { Career } from '../models/career.model.js';
import { Specialization } from '../models/specialization.model.js';
import { Skill } from '../models/skill.model.js';
import { User } from '../models/user.model.js';
import { Mentor } from '../models/mentor.model.js';
import ContentBasedRecommender from 'content-based-recommender';

export const field = async (req,res) => {
    try {
        const fields = await Field.find();
        console.log(fields)
        res.status(200).json({ content : fields, success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const career = async (req,res) => {
    try {
        const { field } = req.body;
        const career = await Career.findOne({field : field});
        await User.findByIdAndUpdate(req.user._id,{
            $set : {
                field : field,
            }
        });
        if(!career){
            res.status(400).json({ message: "Career not found", success: false });
        }

        res.status(200).json({ content : career, success: true });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const specialization= async (req, res) => {
    try {
        const { career } = req.body;
        const specialization = await Specialization.findOne({ career : career })

        if(!specialization){
            res.status(400).json({ message: "Specialization not found", success: false });
        }

        res.status(200).json({ content : specialization, success: true });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const getSkill= async (req, res) => {
    try {
        const { specialization } = req.body;
        const skill = await Skill.findOne({ specialization : specialization })

        if(!skill){
            res.status(400).json({ message: "skill not found", success: false });
        }

        res.status(200).json({ content : skill, success: true });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const updateMenteesChoices = async (req, res) => {
    try {
        const { career, specialization, skills } = req.body;

        await User.findByIdAndUpdate(req.user._id,{
            $set: {
                career: career,
                specification: specialization,
            },
            $push: {
                skills: { $each: skills },
            }
        });

        res.status(200).json({ message: "Mentees choices updated successfully", success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const matching = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const { field, career, skills } = user;
        
        // Try to find mentors with case-insensitive match for field and career
        const mentorsFilteredByFieldAndCareer = await Mentor.find({
            field: { $regex: new RegExp(`^${field}$`, "i") },
            career: { $regex: new RegExp(`^${career}$`, "i") }
        });

        // Content based recommender

        // User id and specification
        const posts = [
            {
              id: user._id.toString(),
              content: user.specification.trim(),
            }
        ];

        // Mentor job titles and skills as tags
        const tags = [];
        mentorsFilteredByFieldAndCareer.map((mentor)=> {
            tags.push({
                id: mentor._id.toString(),
                content: mentor.job_title.trim(),
            })
        })
        console.log("Tags:", tags);

        const recommender = new ContentBasedRecommender({
            minScore: 0.1,
            maxSimilarDocuments: 10
          });

        recommender.trainBidirectional(posts, tags);

        let mentorsFilteredBySpecification = []
        for (let post of posts) {
            const relatedTags = recommender.getSimilarDocuments(post.id);
            mentorsFilteredBySpecification.push(...relatedTags);
        }    

        const matchedMentorsBySpecifications = mentorsFilteredByFieldAndCareer.filter(mentor => 
            mentorsFilteredBySpecification.some(idObj => idObj.id === mentor.id)
        );

        // Train by skills
        const matchedMentors = matchedMentorsBySpecifications.filter((mentor)=> 
            skills.some(userSkill => 
                mentor.skills.some(mentorSkill => 
                    mentorSkill.toLowerCase() === userSkill.toLowerCase()
                )
            )
        )
       
        // Sort by name in ascending order
        const sortedMentors = matchedMentors.sort((a, b) => a.name.localeCompare(b.name));

        await User.findByIdAndUpdate(req.user._id,{
            $push: {
                matchedWith : { $each: sortedMentors },
            }
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}