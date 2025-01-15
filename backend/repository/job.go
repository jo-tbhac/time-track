package repository

import (
	"time-track/backend/model"

	"gorm.io/gorm"
)

type JobRepository struct {
	db *gorm.DB
}

func NewJobRepository(db *gorm.DB) JobRepository {
	return JobRepository{db: db}
}

func (r JobRepository) Create(p model.CreateJobParams) (model.Job, error) {
	job := model.Job{Name: p.Name, HourlyWage: p.HourlyWage}
	result := r.db.Create(&job)

	if result.Error != nil {
		return job, result.Error
	}

	return job, nil
}

func (r JobRepository) FindAll() []model.Job {
	var jobs []model.Job
	r.db.Find(&jobs)

	return jobs
}
