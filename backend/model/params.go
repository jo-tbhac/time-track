package model

type CreateJobParams struct {
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}

type UpdateJobParams struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}
