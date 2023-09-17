impl Solution {
    pub fn time_required_to_buy(tickets: Vec<i32>, k: i32) -> i32 {
        let mut tickets = tickets;
        let mut time = 0;

        while tickets[k as usize] != 0 {
            for i in 0..tickets.len() {
                if tickets[i] > 0 {
                    tickets[i] -= 1;
                    time += 1;
                }
                if i == k as usize && tickets[k as usize] == 0 {
                    break;
                }
            }
        }

        time
    }
}