import excuteQuery from "../../lib/db";

export default async (req, res) => {
    try {
        const result = await excuteQuery({
            query: 'SELECT * from test',
            values: [req.body.content],
        });
        res.status(200).json({success: true, data: {
            tests: result,
        }});
    } catch ( error ) {
        console.log( error );
    }
    
};