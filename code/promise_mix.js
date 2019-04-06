Promise.all(
    tasks.map(task =>
        Array.isArray(task)
            ? task.reduce(
                  (acc, currTask) => acc.then(() => currTask()),
                  Promise.resolve()
              )
            : task()
    )
);
