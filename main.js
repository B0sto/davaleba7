async function getData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        if (response.status === 200) {
            console.log("Success", response.status);
        }
        for (let i = 0; i < response.data.length; i++) {
            console.log(`ID: ${response.data[i].id}, title: ${response.data[i].title}`);
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

// getData();

async function getItem(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (response.status === 200) {
            console.log("Success", response.status);
        }
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

getItem(5);


async function postItem() {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            userId: 11,
            id: 101,
            title: "new data",
            body: "ajapsandali"
        })
        if (response.status === 200) {
            console.log("Success", response.status);
        }else {
            console.log(response.status);
            
        }
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

postItem();

async function putItem(id) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            userid: 999,
            id: 999,
            title: "updated data",
            body: "weoiwendojqwd"
        })

        if (response.status === 200 ) {
            console.log("Success", response.status);
        }
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

putItem(8)

async function deleteItem(id) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status === 200) {
            console.log("Success", response.status);
        }
        console.log("Successfully Deleted");
        
    } catch (error) {
        console.log(error);
        
    }
}

deleteItem(5)