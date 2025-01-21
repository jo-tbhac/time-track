package repository

import (
	"testing"
	"time-track/backend/model"
	"time-track/backend/utils"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/stretchr/testify/assert"
)

func TestShouldSuccessfullyCreateJob(t *testing.T) {
	db, mock := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewJobRepository(db)
	p := model.CreateJobParams{Name: "test job A", HourlyWage: 5000}

	mock.ExpectBegin()
	mock.ExpectExec("^INSERT INTO jobs (.+)$").WithArgs(p).WillReturnResult(sqlmock.NewResult(1, 1))
	mock.ExpectCommit()

	job, err := r.Create(p)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	assert.Equal(t, job.Name, p.Name)
	assert.Equal(t, job.HourlyWage, p.HourlyWage)
}
