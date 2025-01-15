package handler

import (
	"log"
	"time-track/backend/model"
	"time-track/backend/repository"
)

type JobHandler struct {
	repository repository.JobRepository
}

func NewJobHandler(r repository.JobRepository) JobHandler {
	return JobHandler{repository: r}
}

func (h JobHandler) CreateJob(p model.CreateJobParams) (model.Job, error) {
	job, err := h.repository.Create(p)

	if err != nil {
		// TODO handle error
		log.Print(err)
		return job, err
	}

	return job, nil
}
