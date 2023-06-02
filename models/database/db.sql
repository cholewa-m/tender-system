CREATE DATABASE IF NOT EXISTS tender_system;

USE tender_system;

CREATE TABLE IF NOT EXISTS Tender(
    id INT AUTO_INCREMENT NOT NULL,
    name TEXT NOT NULL,
    content TEXT,
    institution TEXT NOT NULL,
    budget INT NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Offer(
    id INT AUTO_INCREMENT NOT NULL,
    tender_id INT NOT NULL,
    bidder TEXT NOT NULL,
    cost INT NOT NULL,
    date DATETIME NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT tender_exist FOREIGN KEY (tender_id) REFERENCES Tender(id)
);
