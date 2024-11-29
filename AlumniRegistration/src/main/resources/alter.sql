ALTER TABLE alumni_organization ADD foreign key (alumni_id) REFERENCES alumni(id);

ALTER TABLE alumni_education ADD foreign key (alumni_id) REFERENCES alumni(id);