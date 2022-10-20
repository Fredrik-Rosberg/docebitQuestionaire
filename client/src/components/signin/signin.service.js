const url = "/api/signin";

//signar in. Skickar en postrequest till backend. Får svar om man är inloggad eller inte.
export const signIn = async (data) => {
  try {
    let dataResponse = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await dataResponse.json();
    console.log(response)
    if(response.loggedIn){
      return response.message
    }
    else{
      console.log(response.message)
      return response.message
    }
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    let response = await fetch(url, {
      method: "delete",
    });
    response = await response.json();
    return response.message
  
  } catch (error) {
    console.log(error);
  }
};

export const getSignedInUser = async () => {
  try {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
