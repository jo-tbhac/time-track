package db

import "time-track/backend/model"

func Migrate() {
	db := GetDB()
	db.AutoMigrate(&model.Job{})
}
