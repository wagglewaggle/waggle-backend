api-monitor-up:
	docker-compose -f ./infra/prometheus/docker-compose.yml up -d

api-monitor-down:
	docker-compose -f ./infra/prometheus/docker-compose.yml down

api-monitor-restart: monitor-down monitor-up