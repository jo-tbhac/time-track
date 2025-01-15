package main

import (
	"context"
	"time-track/backend/db"
	"time-track/backend/handler"
	"time-track/backend/model"
	"time-track/backend/repository"
)

// App struct
type App struct {
	ctx context.Context
}

var jobHandler handler.JobHandler

func init() {
	db.Migrate()

	db := db.GetDB()

	jobHandler = handler.NewJobHandler(repository.NewJobRepository(db))
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) CreateJob(p model.CreateJobParams) model.Job {
	// TODO handle error
	job, _ := jobHandler.CreateJob(p)
	return job
}

func (a *App) FindJobs() []model.Job {
	jobs := jobHandler.FindJobs()
	return jobs
}
