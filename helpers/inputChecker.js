export const inputChecker = (field, content) => {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let websiteRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  switch (field) {
    case "email": {
      return content.match(emailRegex)
        ? { error: false, message: "" }
        : { error: true, message: "Please provide your email." };
    }
    case "name": {
      return content !== ""
        ? { error: false, message: "" }
        : { error: true, message: "Please provide your name." };
    }
    // case "website": {
    //   return content.match(websiteRegex)
    //     ? { error: false, message: "" }
    //     : { error: true, message: "Please provide the URL of your website." };
    // }
    default:
      return { error: false, message: "" };
  }
};
