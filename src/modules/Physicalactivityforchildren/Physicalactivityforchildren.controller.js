    import { Physicalactivityforchildrenmodel } from "../../../db/models/Physicalactivityforchildren.model.js";

    export const uploadVideoPhysicalactivity = async (req, res) => {
    try {
        const url = req.body.url;
        const Physicalactivity = new Physicalactivityforchildrenmodel({
        url,
        });
        
        const Physicalactivitydata = await Physicalactivity.save();

        res.status(201).json({ message: 'Physicalactivity video uploaded and saved', video: Physicalactivitydata });
    } catch (error) {
        res.status(500).json({ message: 'Physicalactivity video upload failed', error: error.message });
    }
    };
    export const getVideosPhysicalactivity = async (req, res) => {


    try {
        const videos = await Physicalactivityforchildrenmodel.find()
        
        res.status(200).json({
        videos
        });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving videos', error });
    }
    };