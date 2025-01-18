package handler

import (
	"time-track/backend/model"
	"time-track/backend/repository"
)

type JobHandler struct {
	repository repository.JobRepository
}

func NewJobHandler(r repository.JobRepository) JobHandler {
	return JobHandler{repository: r}
}

func (h JobHandler) CreateJob(p model.CreateJobParams) model.Job {
	job, _ := h.repository.Create(p)
	return job
}

func (h JobHandler) UpdateJob(p model.UpdateJobParams) model.Job {
	job, _ := h.repository.Update(p)
	return job
}

func (h JobHandler) DeleteJob(id int) {
	h.repository.Delete(id)
}

func (h JobHandler) FindJobs() []model.Job {
	jobs := h.repository.FindAll()

	return jobs
}
