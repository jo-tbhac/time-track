package model

type CreateJobParams struct {
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}
