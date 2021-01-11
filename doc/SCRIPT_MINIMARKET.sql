USE MASTER;
----------------------EXPERIMENTAR N°02--------------------------
--CASO 01: MINIMARKET
CREATE DATABASE BD_MINIMARKET
ON
(NAME=BD_MINIMARKET_PRI,FILENAME='C:\MINIMARKET\BD_MINIMARKET_PRI.MDF',SIZE=30MB, MAXSIZE=100MB,FILEGROWTH=12%)
LOG ON
(NAME=BD_MINIMARKET_TRANS,FILENAME='C:\FARMACIA\SEC\BD_MINIMARKET_TRANS.LDF',SIZE=25MB, MAXSIZE=150MB,FILEGROWTH=8MB)
GO

SELECT * FROM SYS.sysdatabases WHERE NAME = 'BD_MINIMARKET'
GO

USE BD_MINIMARKET;

--CREANDO TABLAS
---------------------------------------------------------------------------------------
Create Table TBEmpleado
(	CODIGO_EMP		INT	NOT NULL	PRIMARY KEY,
	APELL_EMP		VARCHAR(50) NOT NULL,
	NOM_EMP			VARCHAR(50) NOT NULL,
	FECNAC_EMP		DATE NOT NULL,	
	DIRECC_EMP		VARCHAR(50) NOT NULL,
	FECCON_EMP		DATE NOT NULL,
	CORREO_EMP		VARCHAR(40) NOT NULL,
	TELEFO_EMP		CHAR(10) NOT NULL,
	CODIGO_CAR		INT,	
	CODIGO_EMP_SUP	INT,	
	CODIGO_DIS		CHAR(3),
)
go



--GENERANDO LLAVES FORANEAS
Alter Table TBEmpleado
add foreign key(CODIGO_CAR) references TBCargo
GO


Alter Table TBEmpleado
add foreign key(CODIGO_EMP_SUP) references TBEmpleado
GO
Alter Table TBEmpleado
add foreign key(CODIGO_DIS) references TBDistrito
go
---------------------------------------------------------------------------------------
Create Table TBBoleta
(	NRO_BOLETA		CHAR(6) NOT NULL,
	FECHA_VENTA		DATE	NOT NULL,
	CODIGO_CLI		CHAR(6) NOT NULL,
	CODIGO_EMP		INT NOT NULL,
	ESTADO_BOL		CHAR(2) NOT NULL,
	PRIMARY KEY(NRO_BOLETA)
)
go
--GENERADO LLAVES FORANEAS
Alter table TBBoleta
add foreign key(CODIGO_EMP) references TBEmpleado
go
Alter table TBBoleta
add foreign key(CODIGO_CLI) references TBCliente
go
-----------------------------------------------------------------------------------------
Create Table TBCategoria
(	CODIGO_CAT		CHAR(8)		NOT NULL,
	NOMBRE_CAT		VARCHAR(40)	NOT NULL,
	PRIMARY KEY(CODIGO_CAT)
)
go

Create Table TBProducto
(	CODIGO_PRO		CHAR(8)		NOT NULL,
	DESCRI_PRO		VARCHAR(40)	NOT NULL,
	PRE_VEN_PRO		SMALLMONEY	NOT NULL,
	ST_ACT_PRO		INT			NOT NULL,
	ST_MN_PRO		INT			NOT NULL,
	FEC_VEN_PRO		DATE		NOT NULL,
	CODIGO_CAT		CHAR(8)		NOT NULL,
	PRIMARY KEY(CODIGO_PRO)
)
go
--Creando llave foranea
Alter table TBProducto
add foreign key(CODIGO_CAT) references TBCategoria
go

Create Table TBDetalleBoleta
(	NRO_BOLETA		CHAR(6)	NOT NULL,
	CODIGO_PRO		CHAR(8)		NOT NULL,
	CANTID_DET		SMALLINT	NOT NULL,
	PRECIO_DET		SMALLMONEY	NOT NULL,
	PRIMARY KEY(NRO_BOLETA,CODIGO_PRO)
)
go
--Generando llave foranea
Alter table TBDetalleBoleta
add foreign key(CODIGO_PRO) references TBProducto
go


Create Table TBCliente
(	CODIGO_CLI		CHAR(6)		NOT NULL,
	NOMBRE_CLI		VARCHAR(50)	NOT NULL,
	APATER_CLI		VARCHAR(20) NOT NULL,
	AMATER_CLI		VARCHAR(20) NOT NULL,
	DIRECC_CLI		VARCHAR(30) NOT NULL,
	TELEFO_CLI		CHAR(10)	NOT NULL,
	CODIGO_DIS		CHAR(8)		NOT NULL ,
	CORREO_CLI		VARCHAR(20) NOT NULL,
	PRIMARY KEY(CODIGO_CLI)
)
go
alter table TBCliente
drop constraint CODIGO_CLI
go

--CREANDO LLAVES FORANEAS
Alter Table TBCliente
add foreign key(CODIGO_DIS) references TBDistrito


Create Table TBDistrito
(	CODIGO_DIST		CHAR(8)		NOT NULL,
	NOMBRE_DIST		VARCHAR(40)	NOT NULL,
	PRIMARY KEY(CODIGO_DIST)
)
go

Create Table TBCargo
(	CODIGO_CAR		INT	NOT NULL,
	DESCRI_CAR		VARCHAR(40) NOT NULL,
	PRIMARY KEY(CODIGO_CAR)
)
go

