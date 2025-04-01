export default function generatePass() {
    let password: string = "";
    let characteres: string = "ABCDEFGHIJKMLNOQRSTUVWXYZ1234567890!@#$%*()abcdefghijklmnopqrstuvwxyz";
    let passWordlength = 8;

    for (let index = 0; index < passWordlength; index++) {
        password += characteres.charAt(
            Math.floor(Math.random() * characteres.length)
        );
    }

    return password; 
}
