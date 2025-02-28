package repository

import (
	"log"
	"time-track/backend/model"

	"gorm.io/gorm"
)

type RecordRepository struct {
	db *gorm.DB
}

func NewRecordRepository(db *gorm.DB) RecordRepository {
	return RecordRepository{db: db}
}

func (r RecordRepository) Create(p model.CreateRecordParams) (model.Record, error) {
	record := model.Record{
		StartedAt: p.StartedAt,
		EndedAt:   p.EndedAt,
		Note:      p.Note,
		WorkTime:  p.WorkTime,
		JobID:     uint(p.JobID),
	}

	result := r.db.Create(&record)

	if result.Error != nil {
		log.Printf("Fail to create record: %v\n", result.Error.Error())
		return record, result.Error
	}

	return record, nil
}

func (r RecordRepository) FindAll() []model.Record {
	var records []model.Record
	r.db.Find(&records)

	return records
}
