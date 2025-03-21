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

func TestShouldSuccessfullyUpdateRecord(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	startedAt := time.Now()
	endedAt := time.Now()
	note := "Updated sample text."
	workTime := 700

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		StartedAt:           &startedAt,
		EndedAt:             &endedAt,
		Note:                &note,
		WorkTime:            &workTime,
		ShouldUpdateEndedAt: true,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, startedAt), true)
	assert.Equal(t, time.Time.Equal(*updatedRecord.EndedAt, endedAt), true)
	assert.Equal(t, updatedRecord.Note, note)
	assert.Equal(t, updatedRecord.WorkTime, workTime)
}

func TestShouldSuccessfullyUpdateRecordWithoutStartedAt(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	endedAt := time.Now()
	note := "Updated sample text."
	workTime := 700

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		EndedAt:             &endedAt,
		Note:                &note,
		WorkTime:            &workTime,
		ShouldUpdateEndedAt: true,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, record.StartedAt), true)
	assert.Equal(t, time.Time.Equal(*updatedRecord.EndedAt, endedAt), true)
	assert.Equal(t, updatedRecord.Note, note)
	assert.Equal(t, updatedRecord.WorkTime, workTime)
}

func TestShouldSuccessfullyUpdateRecordWithoutEndedAt(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	endedAt := time.Now()

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   &endedAt,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	startedAt := time.Now()
	note := "Updated sample text."
	workTime := 700

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		StartedAt:           &startedAt,
		Note:                &note,
		WorkTime:            &workTime,
		ShouldUpdateEndedAt: false,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, startedAt), true)
	assert.Equal(t, time.Time.Equal(*updatedRecord.EndedAt, *record.EndedAt), true)
	assert.Equal(t, updatedRecord.Note, note)
	assert.Equal(t, updatedRecord.WorkTime, workTime)
}

func TestShouldSuccessfullyUpdateRecordWithoutWorkTime(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	startedAt := time.Now()
	endedAt := time.Now()
	note := "Updated sample text."

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		StartedAt:           &startedAt,
		EndedAt:             &endedAt,
		Note:                &note,
		ShouldUpdateEndedAt: true,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, startedAt), true)
	assert.Equal(t, time.Time.Equal(*updatedRecord.EndedAt, endedAt), true)
	assert.Equal(t, updatedRecord.Note, note)
	assert.Equal(t, updatedRecord.WorkTime, record.WorkTime)
}

func TestShouldSuccessfullyUpdateEndedAtToNull(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	endedAt := time.Now()

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   &endedAt,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	startedAt := time.Now()
	workTime := 600
	note := "Updated sample text."

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		StartedAt:           &startedAt,
		EndedAt:             nil,
		WorkTime:            &workTime,
		Note:                &note,
		ShouldUpdateEndedAt: true,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, startedAt), true)
	assert.Nil(t, updatedRecord.EndedAt)
	assert.Equal(t, updatedRecord.Note, note)
	assert.Equal(t, updatedRecord.WorkTime, workTime)
}

func TestShouldSuccessfullyUpdateRecordWithoutNote(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewRecordRepository(db)
	job, err := createJob(db)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	createParams := model.CreateRecordParams{
		StartedAt: time.Now(),
		EndedAt:   nil,
		Note:      "Sample text.",
		WorkTime:  540,
		JobID:     int(job.ID),
	}

	record, err := r.Create(createParams)

	if err != nil {
		t.Fatalf("Failed to create record: %v", err)
	}

	startedAt := time.Now()
	endedAt := time.Now()
	workTime := 700

	updateParams := model.UpdateRecordParams{
		ID:                  int(record.ID),
		StartedAt:           &startedAt,
		EndedAt:             &endedAt,
		WorkTime:            &workTime,
		ShouldUpdateEndedAt: true,
	}

	updatedRecord, err := r.Update(updateParams)

	if err != nil {
		t.Fatalf("Failed to update record: %v", err)
	}

	assert.Equal(t, time.Time.Equal(updatedRecord.StartedAt, startedAt), true)
	assert.Equal(t, time.Time.Equal(*updatedRecord.EndedAt, endedAt), true)
	assert.Equal(t, updatedRecord.Note, record.Note)
	assert.Equal(t, updatedRecord.WorkTime, workTime)
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
