export default function handler(req, res) {
    res.status(200).json({ memes: [
        {
            id: '1',
            name: 'Mem 1',
        },
        {
            id: '2',
            name: 'Mem 2',
        },
        {
            id: '3',
            name: 'Mem 3',
        },
        {
            id: '4',
            name: 'Mem 4',
        },
        {
            id: '5',
            name: 'Mem 5',
        },
    ] })
  }