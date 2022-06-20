import http from "./http-common";


//seatController/@GetMapping("/schedules/{scheduleId}/seats")
const getSeatByScheduleId = (scheduleId) => {
    return http.get(`/schedules/${scheduleId}/seats`)
}
//scheduleController/@GetMapping("/schedules/{id}")
const getScheduleById = (id) => {
    return http.get(`/schedules/${id}`)
}
//seatContronller/@GetMapping("/seats/{id}")
const getSeatById = (id) => {
    return http.get(`/seats/${id}`)
}
const SeatDataService = {
    getSeatByScheduleId,
    getScheduleById,
    getSeatById
};

export default SeatDataService