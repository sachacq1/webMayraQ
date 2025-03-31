import { DataTypes, or } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

process.loadEnvFile();

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    },
},
    {

        timestamps: true,
        createdAt: 'created_at',  // Usar el nombre de columna de MySQL
        updatedAt: 'updated_at',  // Usar el nombre de columna de MySQL
        tableName: 'users'
    });

const register = async ({ username, email, password }) => {
    const existingUser = await User.findOne({
        where: {
            [Op.or]: [{ username }, { email }] // Verifica ambos campos
        }
    });
    if (existingUser) {
        return { error: 'El usuario ya existe' }

    }
    //encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    // Verifica que los datos sean correctos antes de crear
    console.log("Datos para crear el usuario:", { username, email, password: hashedPass });

    const newUser = await User.create({ username, email, password: hashedPass });

    return (newUser)
}

const login = async (username, password) => {

    const existingUser = await User.findOne({ where: { username } })
    if (!existingUser) {
        return null
    }
    console.log(existingUser.password);

    const itsMatch = await bcrypt.compare(password, existingUser.password);
    if (!itsMatch) {
        return null
    }

    const payload = {
        id: existingUser.id,
    }
    //generar JWT
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return { user: existingUser, token }
}


export default { User, register, login }
export { User }