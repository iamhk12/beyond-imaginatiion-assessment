export default function key_performance_indicators(req : any, res : any) {
  res.status(200).json(
    {
      "key_performance_indicators": {
        "gender": {
          "male": {
            "percentage": 75,
            "total_users": 1024,
            "count": 768
          },
          "female": {
            "percentage": 25,
            "total_users": 1024,
            "count": 256
          }
        },
        "employment_type": {
          "total_users": 1024,
          "full_time": {
            "percentage": 20,
            "total_users": 1024,
            "count": 205
          },
          "part_time": {
            "percentage": 31,
            "total_users": 1024,
            "count": 317
          },
          "daily_wage": {
            "percentage": 49,
            "total_users": 1024,
            "count": 502
          }
        }
      }
    }
  )
}
