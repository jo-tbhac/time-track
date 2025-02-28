package repository

import (
	"testing"
	"time"
	"time-track/backend/model"
	"time-track/backend/utils"

	"github.com/stretchr/testify/assert"
	"gorm.io/gorm"
)

func createJob(db *gorm.DB) (model.Job, error) {
	r := NewJobRepository(db)
	p := model.CreateJobParams{Name: "test job A", HourlyWage: 5000}

	job, err := r.Create(p)

	return job, err
}

func TestShouldSuccessfullyCreateRecord(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	r := NewRecordRepository(db)

	endedAt := time.Now()
	p := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   &endedAt,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	var record model.Record
	record, err = r.Create(p)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	assert.Equal(t, record.StartedAt, p.StartedAt)
	assert.Equal(t, record.EndedAt, p.EndedAt)
	assert.Equal(t, record.Note, p.Note)
	assert.Equal(t, record.WorkTime, p.WorkTime)
	assert.Equal(t, record.JobID, uint(p.JobID))
}

func TestShouldSuccessfullyCreateRecordWithoutEndedAt(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	r := NewRecordRepository(db)

	p := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	var record model.Record
	record, err = r.Create(p)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	assert.Equal(t, record.StartedAt, p.StartedAt)
	assert.Equal(t, record.EndedAt, p.EndedAt)
	assert.Equal(t, record.Note, p.Note)
	assert.Equal(t, record.WorkTime, p.WorkTime)
	assert.Equal(t, record.JobID, uint(p.JobID))
}

func TestShouldSuccessfullyFindRecords(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)

	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	_, err = r.Create(model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	})

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	records := r.FindAll()

	assert.Equal(t, len(records), 1)
}
