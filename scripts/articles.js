const username = 'matejhladky';
const RSSUrl = `https://medium.com/feed/@${username}`;
const proxyUrl = 'https://corsproxy.io/?';
const RSSConverter = `${proxyUrl}https://www.toptal.com/developers/feed2json/convert?url=${RSSUrl}`;

const getMediumData = async () => {
  try {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching Medium articles: ", error);
  }
};

const getAllArticles = async () => {
  try {
    const data = await getMediumData();
    const articles = data.items;
    return articles;
  } catch (e) {
    console.log("Error fetching articles: ", e);
  }
}

async function getLatestArticle() {
  try {
    const data = await getMediumData();
    const article = data.items[0];
    return article;
  } catch (e) {
    console.log("Error fetching latest article: ", e)
  }
}

export { getAllArticles, getLatestArticle };

