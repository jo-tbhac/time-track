package model

import "time"

type CreateJobParams struct {
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}

type UpdateJobParams struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}

type CreateRecordParams struct {
	StartedAt time.Time  `json:"startedAt"`
	EndedAt   *time.Time `json:"endedAt"`
	Note      string     `json:"note"`
	WorkTime  int        `json:"workTime"`
	JobID     int        `json:"jobId"`
}
