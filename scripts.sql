USE car_storage;

CREATE TABLE type_car (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
);

INSERT INTO car_type (id, name) VALUES (
  1, 'sedã',
  2, 'picape'
);
