// -- Required -- //
/*
    - Fetch all (exclude price)
    - Fetch all (includes price)
    - Fetch by id
    // you might be able to do in one function with logic
    - Fetch by location
    - Fetch by pid
    - Fetch by name
    - Fetch ALL where vmi=true
    - Update byid => vmi (location, tricky), price, inStock
    - if updating inStock < 0 figure that out. (Send a message to inventory manager)
    - Delete? no
    - Create => What should they send? location, name, vmi (optional), price
    - ^^ Not sent: pid
    - handle if they try to make a part that has an duplicate name (also for pid)
    - figure out a way to determine which production workcenter this part is related to
    - filter inventory by pids that start with associated prefix (5000, 6000 etc)
    - sort them in ascending order
    - get last item in array
    - get pid
    - create new pid
*/