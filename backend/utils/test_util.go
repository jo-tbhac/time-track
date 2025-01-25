package utils

import (
	"log"
	"os"
	"time-track/backend/model"

	"github.com/DATA-DOG/go-sqlmock"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func NewDBMock() (*gorm.DB, sqlmock.Sqlmock) {
	db, mock, err := sqlmock.New()

	if err != nil {
		log.Fatalf("An error %s was not expected when opening a stub database connection", err)
	}

	gormDB, err := gorm.Open(sqlite.Open("time-track-test.db.sqlite3"), &gorm.Config{
		ConnPool: db,
	})

	if err != nil {
		log.Fatalf("An error %s was not expected when opening gorm database", err)
	}

	gormDB.AutoMigrate(&model.Job{}, &model.Record{})

	return gormDB, mock
}

func DeleteTestingDatabase() {
	os.Remove("time-track-test.db.sqlite3")
}
