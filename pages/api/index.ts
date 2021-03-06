import { getAllGlobalData } from '../../helpers';
import { NextApiResponse, NextApiRequest } from 'next';

const apiPage = async (req: NextApiRequest, res: NextApiResponse) => {
  const allGlobalData = await getAllGlobalData();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  // await res.json(allGlobalData);
  await res.json({
    message: 'API page, use /api/v1/methods, for all methods list',
  });
};

export default apiPage;
