create table Accounts(
	id int primary key AUTO_INCREMENT,
    email nvarchar(50),
    name nvarchar(50)
);

create table Settings(
	id int primary key AUTO_INCREMENT,
    name nvarchar(50),
    value nvarchar(50),
    accountId int,
    foreign key (accountId) references Accounts(id)
);
create table Categories(
	id int primary key AUTO_INCREMENT,
    name nvarchar(50)
);

create table Tags(
	id int primary key AUTO_INCREMENT,
    name nvarchar(50)
);

create table Channels(
	id int primary key AUTO_INCREMENT,
    accountId int,
    name nvarchar(50),
    tagName nvarchar(50),
    des nvarchar(50),
	foreign key (accountId) references Accounts(id)
);

create table Videos(
	id int primary key AUTO_INCREMENT,
    channelId int,
    title nvarchar(50),
    des nvarchar(50),
    view int,
    status int,
    foreign key (channelId) references Channels(id)
);

create table ListVideos(
	id int primary key AUTO_INCREMENT,
    channelId int,
    name nvarchar(50),
    foreign key (channelId) references Channels(id)
);

create table DetailListVideo(
	videoId int AUTO_INCREMENT,
    listVideoId int,
	foreign key (videoId) references Videos(id),
    foreign key (listVideoId) references ListVideos(id)
);

create table ListCategoryVideos(
	videoId int AUTO_INCREMENT,
    categoryId int,
	foreign key (videoId) references Videos(id),
    foreign key (categoryId) references Categories(id)
);

create table DetailTags(
	videoId int AUTO_INCREMENT,
    tagId int,
	foreign key (videoId) references Videos(id),
    foreign key (tagId) references Tags(id)
);


select * from Videos u;


insert into Accounts(email, name) values('lilypeachew@gmail.com', 'lily'),
('erinasaiyukii@gmail.com', 'ellie');

insert into Channels(accountId, name, tagName, des) values (1, 'lily', '@lily2811', 'this is order');
insert into Videos(channelId, title, des, view, status) values(1, 'order', 'this is order', 200, 1);