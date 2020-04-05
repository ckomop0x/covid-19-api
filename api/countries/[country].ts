import { getDataByCountry } from '../../helpers';

const countryPage = async (req: any, res: any) => {
  const error = {
    error: { message: `No data found for ${req.query.country}` },
  };

  if (req.query && req.query.country) {
    const dataByCountry = await getDataByCountry(req.query.country);

    if (dataByCountry.dates && dataByCountry.dates[0]) {
      res.setHeader("Access-Control-Allow-Origin", '*');
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      return res.json(dataByCountry);
    }
    res.status(500);
    return res.json(error);
  }

  res.status(500);
  return res.json(error);
};

export default countryPage;