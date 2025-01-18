package repository

import (
	"log"
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
		log.Printf("Fail to create job: %v\n", result.Error.Error())
		return job, result.Error
	}

	return job, nil
}

func (r JobRepository) Update(p model.UpdateJobParams) (model.Job, error) {
	var job model.Job
	r.db.First(&job, p.ID)
	job.Name = p.Name
	job.HourlyWage = p.HourlyWage

	result := r.db.Save(&job)

	if result.Error != nil {
		log.Printf("Fail to update job: %v\n", result.Error.Error())
		return job, result.Error
	}

	return job, nil
}

func (r JobRepository) Delete(id int) error {
	result := r.db.Delete(&model.Job{}, id)

	if result.Error != nil {
		log.Printf("Fail to delete job: %v\n", result.Error.Error())
		return result.Error
	}

	return nil
}

func (r JobRepository) FindAll() []model.Job {
	var jobs []model.Job
	r.db.Find(&jobs)

	return jobs
}
