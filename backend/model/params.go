package model

type CreateJobParams struct {
	Name       string `json:"name"`
	HourlyWage int    `json:"hourlyWage"`
}

type UpdateJobParams struct {
	CreateJobParams
	ID int `json:"id"`
}
