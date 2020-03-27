
exports.up = function(knex) {
    return knex.schema.createTable('incidents', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        // Foreign Key
        table.string('ong_id').notNullable();
        // Relation Many to One
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
