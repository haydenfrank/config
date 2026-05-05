function riscvrun --wraps='qemu-riscv64 -L /usr/riscv64-linux-gnu' --description 'alias riscvrun=qemu-riscv64 -L /usr/riscv64-linux-gnu'
    qemu-riscv64 -L /usr/riscv64-linux-gnu $argv
end
