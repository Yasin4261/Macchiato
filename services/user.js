const User = require("../models/userModel");

const bcrypt = require("bcrypt");

async function register(username, email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("This e-mail is not available.");
        }


        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        return savedUser; 

    } catch (error) {
        throw error;
    }
}

async function login(email, password) {
    try{
        // Kullanıcıyı e-posta adresine göre bul
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not founded.");
        }

        // Girilen şifreyi kontrol et
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Wrong password.");
        }
        
        return user;


    } catch (error) {
        throw error;
    }

}

async function logout() {
    // Giriş işlemi sırasında genellikle oturum yönetimi yapıldığı için
    // oturum yönetimi ile ilgili işlemler burada gerçekleştirilir.
    // Bu örnekte basit bir çıkış işlemi olduğu için herhangi bir şey yapmıyoruz.

}

module.exports = {
    register,
    login,
    logout,
};