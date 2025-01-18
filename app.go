package main

import (
	"context"
	"time-track/backend/application"
	"time-track/backend/db"
	"time-track/backend/handler"
	"time-track/backend/model"
	"time-track/backend/repository"
	"time-track/backend/utils"

	"github.com/wailsapp/wails/v2/pkg/runtime"
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

	e := runtime.Environment(ctx)
	p := utils.GetConfigFilePath(e.BuildType)
	h, w, x, y := application.ReadWindowState(p)
	runtime.WindowSetPosition(ctx, x, y)
	runtime.WindowSetSize(ctx, w, h)
	runtime.WindowShow(ctx)
}

func (a *App) OnResizeWindow() {
	x, y := runtime.WindowGetPosition(a.ctx)
	w, h := runtime.WindowGetSize(a.ctx)
	e := runtime.Environment(a.ctx)
	p := utils.GetConfigFilePath(e.BuildType)

	application.SaveWindowState(h, w, x, y, p)
}

func (a *App) CreateJob(p model.CreateJobParams) model.Job {
	job := jobHandler.CreateJob(p)
	return job
}

func (a *App) UpdateJob(p model.UpdateJobParams) model.Job {
	job := jobHandler.UpdateJob(p)
	return job
}

func (a *App) FindJobs() []model.Job {
	jobs := jobHandler.FindJobs()
	return jobs
}
