const username = 'thernn';
const RSSUrl = `https://${username}.substack.com/feed`;
const proxyUrl = 'https://corsproxy.io/?';
const RSSConverter = `${proxyUrl}https://www.toptal.com/developers/feed2json/convert?url=${RSSUrl}`;

const getSubstackData = async () => {
  try {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching Substack data: ", error);
  }
};

async function getLatestIssue() {
  try {
    const data = await getSubstackData();
    const issue = data.items[0];
    return issue;
  } catch (e) {
    console.log("Error fetching latest issue: ", e)
  }
}

export { getLatestIssue };
