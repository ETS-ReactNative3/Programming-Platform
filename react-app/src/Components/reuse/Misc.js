import Axios from "axios";

export const getUser = () => {
    return Axios({
        method: "GET",
        withCredentials: true,
        url: urlPrefix() + "auth/user",
    }).then((res) => {
        if (res.data) {
            localStorage.setItem("User", JSON.stringify(res.data));
            window.dispatchEvent(new Event('storage'))
            return res.data;
        } else {
            logout();
            return null;
        }
    });
};

export const logout = () => {
    console.log(urlPrefix() + "auth/logout")
    Axios({
        method: "GET",
        withCredentials: true,
        url: urlPrefix() + "auth/logout",
    }).then((res) => {
        console.log(res)
        localStorage.removeItem("User");
        window.dispatchEvent(new Event('storage'))
        window.location.href = '/login';
    });
}

export const logoutWNRedirect = () => {
    console.log(urlPrefix() + "auth/logout")
    Axios({
        method: "GET",
        withCredentials: true,
        url: urlPrefix() + "auth/logout",
    }).then((res) => {
        console.log(res)
        localStorage.removeItem("User");
        window.dispatchEvent(new Event('storage'))
    });
}


export const urlPrefix = () => {
    if (window.location.origin.includes("localhost")) {
        return "http://localhost:3200/"
    }
    else {
        return "https://ts-prog.herokuapp.com/"
    }
};

export const checkLoggedIn = () => {
    if (localStorage.getItem("User")) {
        return Axios({
            method: "GET",
            withCredentials: true,
            url: urlPrefix() + "auth/user",
        }).then((res) => {
            if (res.data) {
                localStorage.setItem("User", JSON.stringify(res.data));
                window.dispatchEvent(new Event('storage'))
                return true;
            } else {
                logoutWNRedirect();
                return null;
            }
        });
    }
    else {
        return null;
    }
}

export const langParser = (val) => {
    if (val === 'python3' || val === 'python2') {
        return ('python');
    }
    else if (val === 'gpp') {
        return ('cpp');
    }
    else if (val === 'gcc') {
        return ('c');
    }
    else if (val === 'mcs') {
        return ('csharp');
    }
    else return (val);
}

export const langParserForSubmission = (val) => {
    if (val === 'python3') {
        return ('Python 3');
    }
    else if (val === 'python2') {
        return ('Python 2');
    }
    else if (val === 'gpp'){
        return ('C++');
    }
    else if (val === 'gcc') {
        return ('C');
    }
    else if (val === 'mcs') {
        return ('C#');
    }
    else return (val);
}