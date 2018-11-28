module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
        task: DataTypes.STRING,
        done: DataTypes.BOOLEAN
    });
    return Todo;
};