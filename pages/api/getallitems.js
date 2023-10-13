// pages/api/getallitems.js
import dbConnect from '../../db'; // Import your MongoDB connection
import Item from '../../models/Item'; // Import your model
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all items from the database
    const items = await Item.find();

    // Send the items as a response
    res.json({ success: true, data: items });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch items' });
  }
});

export default handler;
