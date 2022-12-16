
Create Database IMPORT_DEMODAY;
use IMPORT_DEMODAY;

drop database import;

create table Tb_Login(
pk_idLogin int auto_increment not null primary key, 
email varchar(50) not null,
senha varchar(20) not null
);

select * from Tb_Login;


insert into Tb_Login (email,senha)
values 	('Yusra@gmail.com','22refugiado'),
		('lucas@hotmail.com','lovepsicologia123'),
		('adriano@yahoo.com.br','tecnologico@'),
		('RenataAndrade@gmail.com.br','reSilva'),
		('Chade Haran@gmail.com','refugiouniversal');


create table Tb_Refugiado(
pk_idRefugiado int auto_increment not null primary key, 
nome_refugiado varchar(50) not null,
data_nascimento date not null,
celular varchar(15),
nome_mae varchar(20) not null,
nacionalidade varchar(50) not null,
id_Vagas int,
id_Curriculo int,
id_Consulta int,
id_Login int
);

drop table Tb_Refugiado ;

ALTER TABLE Tb_Refugiado ADD CONSTRAINT fk_idVagas FOREIGN KEY ( id_Vagas ) REFERENCES Tb_Vagas ( pk_idVagas );
ALTER TABLE Tb_Refugiado ADD CONSTRAINT fk_idCurriculo FOREIGN KEY ( id_Curriculo ) REFERENCES Tb_Curriculo ( pk_idCurriculo );
ALTER TABLE Tb_Refugiado ADD CONSTRAINT fk_idConsulta FOREIGN KEY ( id_Consulta ) REFERENCES Tb_Consulta ( pk_idConsulta );
ALTER TABLE Tb_Refugiado ADD CONSTRAINT fk_idLogin FOREIGN KEY ( id_Login ) REFERENCES Tb_Login ( pk_idLogin );


select * from Tb_Refugiado;

/* constraint pk_idRefugiado primary key (Id),
constraint fk_idVagas foreign key  (id_Vagas) references Tb_Vagas (id),
constraint fk_idCurriculo foreign key  (id_Curriculo) references Tb_Curriculo (id),
constraint fk_idConsulta foreign key (id_Consulta)  references Tb_Consulta (id),
constraint fk_idLogin_ foreign key  (id_Login) references Tb_Login (id)
); */

insert into Tb_Refugiado (nome_refugiado,data_nascimento,celular,nome_mae,nacionalidade)	
values 	('Yusra Mardini','2000-07-20','944728922','Rose Mardini','Siria'),
		('Yolande Mabika','1990-02-12','954788912','julie Makita','Venezuela'),
		('Popole Anis','1998-10-22','944086922','Rani Anis','Afeganistão'),
		('Yonas Kinde','2000-07-16','978568921','Anjelina Nadai ','Ucrânia'),
        ('Chade Haran','1997-05-20','978568921','Jordâna Boko','Israel');
        
        select * from Tb_Refugiado;
        
	    describe Tb_Refugiado;


create table Tb_Vagas(
pk_idVagas int auto_increment primary key, 
nome_empresa varchar(50) not null,
email_notificacao varchar(50),
idioma varchar(15),
pais varchar(20)not null,
endereco varchar(50) not null,
informacao_tipo_vaga boolean,
beneficios boolean,
renumeracao varchar(50),
tipo_vaga varchar(50),
titulo_vaga varchar (50),
codigo_notificacao varchar(50),
id_Refugiado int,
id_Recrutador int,
id_Empresa int
);

ALTER TABLE Tb_Vagas ADD CONSTRAINT fk_idRefugiado FOREIGN KEY ( id_Refugiado ) REFERENCES Tb_Refugiado ( pk_idRefugiado );
ALTER TABLE Tb_Vagas ADD CONSTRAINT fk_idEmpresa FOREIGN KEY ( id_Empresa ) REFERENCES Tb_Empresa ( pk_idEmpresa );
ALTER TABLE Tb_Vagas ADD CONSTRAINT fk_idRecrutador FOREIGN KEY ( id_Recrutador ) REFERENCES Tb_Recrutador ( pk_idRecrutador );

drop table Tb_Vagas;

describe Tb_Vagas;

/*
constraint fk_idRefugiado foreign key  (id_Refugiado)references Tb_Refugiado (id_Refugiado),
constraint fk_idRecrutador foreign key  (id_Recrutador)references Tb_Recrutador (id_Recrutador),
constraint fk_idEmpresa foreign key  (id_Empresa) references Tb_Consulta (id_Empresa)
);
*/

insert into Tb_Vagas (nome_empresa,email_notificacao,idioma,pais,endereco,informacao_tipo_vaga,beneficios,renumeracao,tipo_vaga,titulo_vaga,codigo_notificacao)	
values 	('TechWord','techword@gmail.com','Português','Brasil','rua joão ramario',false,true,'R$2.500,00','Presencial','Auxiliar Administrativo','1458981'),
		('Advocacia Gomes','advocacia.gomes@hotmail.com','Português','Brasil','rua dom Pedro II',true,false,'R$1.500,00','Presencial','secretari(a)','168191'),
		('Google','google.com','ingles','Brasil','Av Paulista ',true,true,'R$3.300,00','Home Office',' DBA (database administrator)','156192'),
		('Auto Peças Oratorio','PeçasOratorio@yahoo.com','Português','Brasil','Rua Oratorio',false,false,'R$1.200,00','Presencial','ajudante de mecânico','4161919'),
        ('Itau','itau.com.br','Português','Brasil','rua Elisa Flaquer',true,false,'R$3.000,00','Remoto','Desenvolvedor Full Stack','651915');


create table Tb_Consulta(
pk_idConsulta int auto_increment not null primary key,
nome_profissional varchar(50) not null,
nome_refugiado varchar(50) not null,
horario time ,
data_agendamento date,
celular varchar(15),
id_Psicologo int,
id_Refugiado int
);


ALTER TABLE Tb_Consulta ADD CONSTRAINT fk_idPsicologo FOREIGN KEY ( id_Psicologo ) REFERENCES Tb_Psicologo ( pk_idPsicologo );
ALTER TABLE Tb_Consulta ADD CONSTRAINT fk_idRefugiado_Consulta FOREIGN KEY ( id_Refugiado ) REFERENCES Tb_Refugiado ( pk_idRefugiado );

/*
constraint pk_idConsulta  primary key (id_Consulta),
constraint fk_idPsicologo foreign key  (id_Psicologo)references Tb_Psicologo (id_Psicologo),
constraint fk_idRefugiado foreign key  (id_Refugiado) references Tb_Refugiado (id_Refugiado)
 );
 */
 
insert into Tb_Consulta (nome_profissional,nome_refugiado,horario,data_agendamento,celular)	
values 	('Lucas Rodrigues','Yusra Mardini','15:00:59','2022-08-15','932959923'),
		('Gabriel domingues','Yolande Mabika','10:00:10','2022-07-10','932954652'),
        ('Lucas rodrigues','Popole Anis','15:30:00','2022-08-15','985479923'),
        ('Lucas rodrigues','Yonas Kinde','16:40:59','2022-12-20','954757845'),
        ('Lucas rodrigues','Chade Haran','18:20:30','2022-07-09','956305986');
 
 select*from Tb_Consulta;
 
create table Tb_Psicologo(
pk_idPsicologo int auto_increment primary key,
nome varchar(50) not null,
CRP varchar(10) not null,
celular varchar(15),
id_Consulta int,
id_Refugiado int
);


ALTER TABLE Tb_Psicologo ADD CONSTRAINT fk_idConsulta_Psicologo FOREIGN KEY ( id_Consulta ) REFERENCES Tb_Consulta( pk_idConsulta );
ALTER TABLE Tb_Psicologo ADD CONSTRAINT fk_idRefugiado_Psicologo FOREIGN KEY ( id_Refugiado ) REFERENCES Tb_Refugiado ( pk_idRefugiado );



/*
constraint fk_idConsulta foreign key  (id_Consulta)references Tb_consulta (id_Consulta),
constraint fk_idRefugiado foreign key  (id_Refugiado)references Tb_refugiado (id_refugiado)
);
*/


insert into Tb_Psicologo (nome,CRP,celular)	
values 	('Lucas Rodrigues','55/351.476','956255126'),
		('Marcos Soares','55/378.546','956201523'),
        ('Guilherme','55/092.530','985678952'),
        ('Anderson Morais','55/512.750','985454512'),
        ('Renata Rodrigues','55/022.697','956305986');
 
 


create table Tb_Ongs(
pk_idOngs int auto_increment primary key,
nome varchar(50) not null,
email varchar(50) not null,
endereco varchar(50) not null,
CNPJ varchar(20) not null,
celular varchar(15),
id_Login int
);

drop table Tb_ongs;


ALTER TABLE Tb_Ongs ADD CONSTRAINT fk_idLogin_Ongs FOREIGN KEY ( id_Login ) REFERENCES Tb_Login( pk_idLogin );


/*
constraint fk_idConsulta foreign key  (id_Login)references Tb_Login (id_Consulta)
);
tb_ongs
*/
insert into Tb_Ongs(nome,email,endereco,CNPJ,celular)	
values 	('ViaOng ','ViaOng@gmail.org.com.br','rua evagelista',' 03.778.130/0001-55','960926051'),
		('Ongs','Ongs.brasil@hotmail.com','rua romenia',' 55.785.550/5501-55','986204560'),
        ('Ongspaulista','paulista.ongs@yahoo.com.br','rua inacio ',' 53.878.440/4001-85','903056158'),
        ('acolhendovidas','acolhendo.vidas@gmail.com','rua guilherme',' 23.578.200/2601-56','910454359'),
        ('abreportas','abreportas@yahoo.com','rua osorio de almeida',' 55.378.730/0001-35','955200456');
 

create table Tb_Empresa(
pk_idEmpresa int auto_increment primary key ,
nome_empresa varchar(50),
CNPJ varchar(20) not null,
email varchar(50),
celular varchar(15),
endereco varchar(50),
cidade varchar(50),
estado varchar(50),
id_Recrutador int 
);


ALTER TABLE Tb_Empresa ADD CONSTRAINT fk_idRecrutador_Empresa FOREIGN KEY ( id_Recrutador ) REFERENCES Tb_Recrutador ( pk_idRecrutador );


/*
constraint fk_idRecrutador foreign key (id_Recrutador) references Tb_Recrutador (id_Recrutador)
);
*/

insert into Tb_Empresa(nome_empresa,CNPJ,celular,endereco,cidade,estado)	
values 	('TechWord','548.762.587/8556-50','935259562','rua joão ramario','São Paulo','São Paulo'),
		('Advocacia Gomes','598.856.657/9653-89','978406451','rua dom Pedro II','são caetano','São Paulo'),
        ('Google','654.588.854/76-27','974874785','Av Paulista 1529','São Paulo','São Paulo'),
        ('Auto Peças Oratorio','704.548.546/4561-55','967457568','Rua Oratorio','Santo André','São Paulo'),
        ('Itau','102.234.542/7564-56','976906874','rua Elisa Flaquer','Santo André','São Paulo');
 
 
 
create table Tb_Recrutador(
pk_idRecrutador int auto_increment primary key,
nome_recrutador varchar(50),
CNPJ varchar(20) not null,
celular varchar(15),
endereco varchar(50),
id_Vagas int,
id_Empresa int,
id_Refugiado int
);

drop table Tb_Recrutador;
drop table tb_recrutador;


ALTER TABLE Tb_Recrutador ADD CONSTRAINT fk_Empresa FOREIGN KEY ( id_Empresa) REFERENCES Tb_Empresa ( pk_idEmpresa );
ALTER TABLE Tb_Recrutador ADD CONSTRAINT fk_Refugiado FOREIGN KEY ( id_Refugiado ) REFERENCES Tb_Refugiado ( pk_idRefugiado );
ALTER TABLE Tb_Recrutador ADD CONSTRAINT fk_Vagas FOREIGN KEY ( id_Vagas ) REFERENCES Tb_Vagas ( pk_idVagas );

/*
constraint fk_idConsulta foreign key  (id_Consulta)references Tb_consulta (id_Consulta),
constraint fk_idRefugiado foreign key  (id_Refugiado)references Tb_refugiado (id_refugiado)
*/ 
 
insert into Tb_Recrutador(nome_recrutador,CNPJ,celular,endereco)	
values 	('Rodrigo Souza','548.762.587/8556-50','935259562','rua joão ramario'),
		('Pedro vieira','598.856.657/9653-89','978406451','rua dom Pedro II'),
        ('thiago silva','654.588.854/76-27','974874785','Av Paulista 1529'),
        ('Guilherme Rodrigues','704.548.546/4561-55','967457568','Rua Oratorio'),
        ('italo soares','102.234.542/7564-56','976906874','rua Elisa Flaquer');
 

 select * from Tb_Recrutador;
 
 
 
 
create table Tb_Curriculo(
pk_idCurriculo int auto_increment primary key,
nome_refugiado varchar(50),
email varchar(50),
celular varchar(15),
endereco varchar(50),
cidade varchar(50),
uf varchar(2),
habilidade varchar(500),
data_nascimento date,
formacao varchar(50),
projetos varchar(50),
rede_social varchar(50),
experiencia varchar (50),
numero_rua varchar(50),
bairro varchar(50),
id_Refugiado int,
id_Recrutador int
);

ALTER TABLE Tb_Curriculo ADD CONSTRAINT fk_idERefugiado FOREIGN KEY ( id_Refugiado ) REFERENCES Tb_Refugiado ( pk_idRefugiado );
ALTER TABLE Tb_Curriculo ADD CONSTRAINT fk_Recrutador FOREIGN KEY ( id_Recrutador ) REFERENCES Tb_Recrutador ( pk_idRecrutador );

drop table Tb_Curriculo;

/*
constraint pk_idEmpresa primary key (Tb_Curriculo),
constraint fk_idRecrutador foreign key (id_Consulta) references Tb_Consulta (id_Consulta),
constraint fk_idLogin foreign key (id_Login) references Tb_Login (id_Login)
);
*/

/*falta modificar*/
insert into Tb_Curriculo (nome_refugiado,email,celular,endereco,cidade,uf,habilidade,data_nascimento,formacao,projetos,rede_social,experiencia,numero_rua,bairro)	
values 	('Yusra Mardini','Yusra.Mardini@gmail.com','944728922','null','Palmira','SY','word,excel,powerpoint','2000-07-20','ensino medio completo','projetos de conclusao','Yusra Mardini,Yusra ','null',' 123','null'),
		('Yolande Mabika','Makika.yolande@hotmail.com','954788912','Rua camargo','Caracas','VE','Informática - Sistemas operacionais, Pacote office avançado,
io Lógico, Gestão de tempo, Flexibilidade, Comunicação, Atendimento, Trabalho em Grupo','1999-10-15','analise e desenvolvimento de sistemas','projeto interdiciplinar','null','null','115','vila guilherme');
