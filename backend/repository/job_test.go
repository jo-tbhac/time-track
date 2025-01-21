package repository

import (
	"testing"
	"time-track/backend/model"
	"time-track/backend/utils"

	"github.com/stretchr/testify/assert"
)

func TestShouldSuccessfullyCreateJob(t *testing.T) {
	db, _ := utils.NewDBMock()
	defer utils.DeleteTestingDatabase()

	r := NewJobRepository(db)
	p := model.CreateJobParams{Name: "test job A", HourlyWage: 5000}

	// mock.ExpectBegin()
	// mock.ExpectExec("^INSERT INTO jobs (.+)$").WillReturnResult(sqlmock.NewResult(1, 1))
	// mock.ExpectCommit()

	job, err := r.Create(p)

	if err != nil {
		t.Fatalf("Failed to create job: %v", err)
	}

	// if err := mock.ExpectationsWereMet(); err != nil {
	// 	t.Fatalf("There were unfulfilled expectations: %v", err)
	// }

	assert.Equal(t, job.Name, p.Name)
	assert.Equal(t, job.HourlyWage, p.HourlyWage)
}
