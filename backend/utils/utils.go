package utils

import "fmt"

func GetConfigFilePath(env string) string {
	return fmt.Sprintf("config.%s.json", env)
}
