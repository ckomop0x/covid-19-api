import { getDataByCountry } from '../../helpers';

const countryPage = async (req, res) => {
  const error = {
    error: { message: `No data found for ${req.query.country}` },
  };

  if (req.query && req.query.country) {
    const dataByCountry = await getDataByCountry(req.query.country);

    if (dataByCountry.recovered && dataByCountry.recovered[0]) {
      return res.json(dataByCountry);
    }
    res.status(500);
    return res.json(error);
  }

  res.json(error);
};

export default countryPage;
