INSERT INTO users (user_name, password, email_address, role, enabled) VALUES ('Dani1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'f3ral.riser@gmail.com', 0,true);
INSERT INTO users (user_name, password, email_address, role, enabled) VALUES ('Dani2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'gyonidanielhivatalos@gmail.com', 1,true);

INSERT INTO feltetek (nev, ar) VALUES ('Sajt', '100');
INSERT INTO feltetek (nev, ar) VALUES ('Sonka', '150');
INSERT INTO feltetek (nev, ar) VALUES ('Szalami', '150');
INSERT INTO feltetek (nev, ar) VALUES ('Bacon', '200');
INSERT INTO feltetek (nev, ar) VALUES ('Kolbasz', '200');
INSERT INTO feltetek (nev, ar) VALUES ('Lilahagyma', '130');
INSERT INTO feltetek (nev, ar) VALUES ('Csipospaprika', '180');

INSERT INTO alapok (nev,ar) VALUES ('Paradicsomos', '300');
INSERT INTO alapok (nev,ar) VALUES ('Tejfolos', '320');
INSERT INTO alapok (nev,ar) VALUES ('Mustaros', '350');

INSERT INTO tesztak (nev, ar) VALUES ('Vastag', '350');
INSERT INTO tesztak (nev, ar) VALUES ('Vekony', '300');

INSERT INTO pizzak (id, ar, nev, alap_id, teszta_id) VALUES (1, 1100, 'Sajtos', 1, 1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (1,1);

INSERT INTO pizzak (id, ar, nev, alap_id, teszta_id) VALUES (2, 1300, 'Sonkas', 1, 2);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (2,1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (2,2);

INSERT INTO pizzak (id, ar, nev, alap_id, teszta_id) VALUES (3, 1300, 'Szalamis', 1, 2);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (3,1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (3,3);

INSERT INTO pizzak (id, ar, nev, alap_id, teszta_id) VALUES (4, 1500, 'Magyaros', 2, 2);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,3);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,4);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,5);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,6);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (4,7);

INSERT INTO pizzak (id, ar, nev, alap_id, teszta_id) VALUES (5, 1500, 'Zsombi kedvence', 3, 1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (5,1);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (5,3);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (5,4);
INSERT INTO pizzak_feltetek (pizza_id, feltet_id) VALUES (5,6);