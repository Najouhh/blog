// Alla kod för att anropa web apie läggs i service funkar på samma sätt
// som ett repo i .net

const GetBlogItem = async (id) => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + id;
    const response = await fetch(url);
    return await response.json();
}

export default GetBlogItem;
